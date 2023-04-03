import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h1>Какую еду вы предпочитаете?</h1>
            {['ПИЦЦА', 'ПАСТА', 'МОРЕ ПРОДУКТЫ', 'ВСЕ'].map(category => <Filter  key={index} category={category} />)
            }
            
        </div>
    )
}

export default AllCategories;
