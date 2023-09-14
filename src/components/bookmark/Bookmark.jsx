import  PropTypes  from 'react';

const Bookmark = ({credit, index}) => {
    console.log(index)
    const {courseName} = credit;
    return (
        <div className=''>
            <h4 className='text-[rgba(28, 27, 27, 0.60)] text-base font-normal'>{index + 1}. {courseName}</h4>
         </div>
    );
};

Bookmark.propTypes = {
    credit : PropTypes.object,
    index : PropTypes.number
};

export default Bookmark;