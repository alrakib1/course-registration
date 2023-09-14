import PropTypes from 'prop-types';

const Bookmark = ({credit}) => {
    const {courseName} = credit;
    
    return (
        <div className=''>
            <h4 className='text-[rgba(28, 27, 27, 0.60)] text-base font-normal'>{courseName}</h4>
        </div>
    );
};
Bookmark.propTypes ={
    credit : PropTypes.object.isRequired,
    count : PropTypes.number
}
export default Bookmark;