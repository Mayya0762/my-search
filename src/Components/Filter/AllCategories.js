import Filter from "./Filter";

const AllCategories = () => {
    return(<div className="blok top">
        <h1>Shoe Type: </h1>

        {['All Type', 'Sneakers', 'Boys', 'Girls', 'Men', 'Women']
        .map((category, index) => <Filter key={index} category={category} /> 
        )}
        
    </div>)
}
export default AllCategories;