import cn from '../utils/cn';

const Logo = ({className}) => {
  return (
    <div className={cn(className)}>
        <h2 className={cn('bg-blue-600 p-2 rounded-lg')}>
        <span className='text-2xl text-white'>FO</span>
        <span className='mt-3 text-sm'>od.ng</span>
        </h2>
    </div>
  )
}

export default Logo