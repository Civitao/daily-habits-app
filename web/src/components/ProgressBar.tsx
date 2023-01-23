
interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {


  return(
    <div  
        aria-label='Progresso de hábitos completados nesse dia'
        aria-valuenow={props.progress}
        role="progressbar" 
        className='h-3 rounded-xl bg-zinc-700 w-full  mt-4'>

      <div 
        style={{
          width: `${props.progress}%`
        }}
        className='h-3 rounded-xl bg-violet-600' />
      </div>
  )
}