interface HabitsProps {
  completed: number;
}

export function Habit(props: HabitsProps) {
  return (
    <div className="">
      {props.completed}
    </div>
  )
}