import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox'

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input 
        type="text"
        id="title"
        placeholder="ex.: Exercícios, dormir bem,etc..."
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>
        <div className="flex gap-4 items-center">
          <Checkbox.Root ch
            className="w-8 h-8 border-zinc-800 border-2 flex rounded-lg text-center mt-2 items-center justify-center checked:bg-green-600 "
          >
            <Checkbox.Indicator   >
               <Check size={20} weight="bold" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="segunda-feira" >
            Segunda-feira
          </label>
        </div>
      <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
        <Check size={20} weight="bold" />

        Confirmar
      </button>

    </form>
  )
}