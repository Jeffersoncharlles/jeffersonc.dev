import Icon from "@/components/stacks";
import { InputFocusBlur } from "@/components/ui/InputFocusBlur";


export default function Blog() {
  return (
    <section className="grid grid-cols-2 w-full gap-8 mt-12">
      <div className="">
        <Icon />
      </div>
      <div className="w-[50%] border flex flex-col  items-end ">
        <h1 className="text-2xl text-violet-500">Contato</h1>

        <div className="">
          <InputFocusBlur type="text" name="Name" placeholder="Digite seu nome" />
          <InputFocusBlur type="email" name="email" placeholder="Digite seu email" />
          <InputFocusBlur type="tel" name="phone" placeholder="Digite seu Numero de telefone" />
        </div>

      </div>
    </section>
  );
}
