import Icon from "@/components/stacks";
import { InputFocusBlur } from "@/components/ui/InputFocusBlur";


export default function Blog() {
  return (
    <section className="flex md:flex-row justify-between  flex-col mt-12">
      <div className=" w-[50%]">
        <Icon />
      </div>
      <form className="flex-1  flex flex-col items-center p-10">
        <h1 className="text-4xl text-violet-200">Contato</h1>
        <div className="mt-10 flex justify-center items-center flex-col  w-full h-full space-y-4 ">
          <InputFocusBlur
            type="text"
            name="Name"
            placeholder="Digite seu nome"
          />
          <InputFocusBlur
            type="email"
            name="email"
            placeholder="Digite seu email"
          />
          <textarea className="resize-none bg-zinc-900 rounded-lg w-[480px] h-[240px] text-zinc-300 mb-6" value="" />
        </div>

      </form>
    </section>
  );
}
