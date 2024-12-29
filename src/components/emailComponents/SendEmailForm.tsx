import { useForm } from "react-hook-form";
import { Box } from "../ui/Box";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Button } from "../ui/Button";

const emailSchema = z.object({
   sender: z.number(),
   recipient: z.string().email("Invalid email"),
   subject: z
      .string()
      .min(1, "Subject is required")
      .max(255, "Subject must be less than 255 characters"),
   message: z.string().min(1, "Message is required")
});

type EmailFormData = z.infer<typeof emailSchema>;

function SendEmailForm() {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting }
   } = useForm<EmailFormData>({
      resolver: zodResolver(emailSchema)
   });

   const onSubmit = async (data: EmailFormData) => {
      

   };

   return (
      <Box className="mx-auto w-[450px]">
         <h2 className="text-center text-xl">Send an email</h2>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 mt-4"
         >
            <Input
               register={register("recipient")}
               placeholder="Recipient email"
               error={errors.recipient}
            />
            <Input
               register={register("subject")}
               placeholder="Subject"
               error={errors.subject}
            />
            <TextArea
               register={register("message")}
               placeholder="Message"
               error={errors.message}
            />
            <Button>Send</Button>
         </form>
      </Box>
   );
}

export { SendEmailForm };
