import { Play } from "phosphor-react";
import { CountDownCOntainer, FormContainer, ButtonContainer, HomeContainer, TaskInput, MinutesAmmountInput } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { useEffect, useState } from "react";

export function Home() {

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycle, setActiveCycle] = useState<Cycle | null>(null)
  const [ammountSeccondsPassed, setAmmountSecondsPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - ammountSeccondsPassed : 0
  const minutesAmmount = Math.floor(currentSeconds / 60)
  const secondsAmmount = currentSeconds % 60

  const minutes = String(minutesAmmount).padStart(2, '0')
  const seconds = String(secondsAmmount).padStart(2, '0')


  const newCycleValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmmount: zod.number().min(5).max(60),
  })

  type NewCicleFormData = zod.infer<typeof newCycleValidationSchema>

  const { register, handleSubmit, watch, reset } = useForm<NewCicleFormData>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      minutesAmmount: 0,
      task: ''
    }
  })

  interface Cycle {
    id: string
    task: string
    minutesAmmount: number
    startDate: Date
  }
  const handleCreateNewCycle = (data: NewCicleFormData) => {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      minutesAmmount: data.minutesAmmount,
      task: data.task,
      startDate: new Date()
    }
    setCycles(state => [...state, newCycle])
    setActiveCycle(newCycle)
    reset()
  }

  useEffect(() => {}, [activeCycle])

  const isFormFilled = watch('task') && watch('minutesAmmount')
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            placeholder="De um nome para seu projeto"
            type="text"
            id="task"
            list="task-suggestions"
            {...register('task')}
          />
          <datalist id="task-suggestions" >
            <option value="Teste 1"></option>
            <option value="Teste 3"></option>
            <option value="Teste 2"></option>
          </datalist>

          <label htmlFor="minutesAmmount">Durante</label>
          <MinutesAmmountInput
            placeholder="00"
            type="number"
            id="minutesAmmount"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmmount', { valueAsNumber: true })}
          />

          <span>Minutos</span>
        </FormContainer>

        <CountDownCOntainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <span>:</span>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownCOntainer>

        <ButtonContainer disabled={!isFormFilled} type="submit">
          <Play size={24} />
          <span>Começar</span>
        </ButtonContainer>
      </form>
    </HomeContainer>
  )
}