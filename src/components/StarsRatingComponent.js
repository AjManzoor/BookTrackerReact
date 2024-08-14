function StarRatingComponent({starsNum, rating, setRating}){

    let starsArray = [];

    for(let i = 1; i < starsNum + 1; i++){
        starsArray = [...starsArray, i]
    }

    const handleStarClick = (newRatingVal) => {
        setRating(newRatingVal)
    }
    

    return(
        starsArray.map((star) => 

            <span key={star}
            style={{
                cursor: 'pointer',
                    color: (star <= rating) ? '#ffc107':'#e4e5e9', fontSize: '2rem',}}
            onClick={()=> {handleStarClick(star)}}
                    >
                    
                        ★
                    </span>
        )
    )

}

export default StarRatingComponent