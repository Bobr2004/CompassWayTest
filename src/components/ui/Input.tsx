type InputProps = {
   register: any;
   type?: string;
   placeholder: string;
};

function Input({ register, type, placeholder }: InputProps) {
   type ??= "text";
   return (
      <input
         className="py-2 px-4 border border-stone-200 rounded-lg focus:border-stone-300 focus:outline outline-1 outline-stone-300 w-full"
         {...{register, type, placeholder}}
      />
   );
}

export default Input;
