export default function SearchBar({ postData, setPosts, handleSearch, setSearch }) {
    function resetPage(){
        setPosts(postData)
        setSearch('')
    }
    return (
        <div className="d-none d-sm-block my-3 d-flex">
            <div className="d-flex gap-3">
                <input className="form-control" type="search" placeholder="Search posts by location..." onChange={handleSearch}></input>
                <button className="btn btn-warning" onClick={resetPage}>Cancel</button>
            </div>
        </div>
        // <>
        // <div>
        //     <p>Search posts by location</p>
        //     <input type="text"/>
        //     <button type="button">Cancel</button>
        // </div>
        // </>
    )
}