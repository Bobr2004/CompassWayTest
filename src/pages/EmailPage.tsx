import { SendEmailForm } from "../components/emailComponents/SendEmailForm";
import { UserInfo } from "../components/emailComponents/UserInfo";

function EmailPage() {
   return (
      <>
         <section>
            <UserInfo />
         </section>
         <section>
            <SendEmailForm />
         </section>
      </>
   );
}

export { EmailPage };
