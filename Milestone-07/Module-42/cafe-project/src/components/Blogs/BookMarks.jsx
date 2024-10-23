import PropTypes from 'prop-types'

const BookMarks = ({marks , readTimeMark}) => {
  return (
    <div className='w-full'>
        <h1 className=' border-2 border-purple-700 py-10 px-2 bg-purple-200 rounded-xl text-center text-xl font-bold'>Spent time on read : {readTimeMark} min</h1>
        <div className="border-2 p-3 bg-gray-200 rounded-xl mt-5 space-y-10 h-full">
            {marks.map((mark , idx) => <div className='bg-white border-2 rounded-md py-10 ' key={idx}>
                <p className='text-xl text-center font-semibold'>{mark.title}</p>
            </div>)}
        </div>
    </div>
  )
}

BookMarks.propTypes = {
    marks: PropTypes.object,
    readTimeMark: PropTypes.number
}

export default BookMarks