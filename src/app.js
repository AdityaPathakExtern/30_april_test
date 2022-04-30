function App()
{
    {
        const dataList = [
            {
                "employe_id":1,
                "name": "Vishal",
                "Year": 2000,
                "emp-designation": "software Engineer"
            },
            {
                "employe_id":2,
                "name": "Pushkar",
                "Year": 2003,
                "emp-designation": "software Engineer"
            },
            {
                "employe_id":3,
                "name": "Anjali",
                "Year": 2005,
                "emp-designation": "software Engineer"
            },
            {
                "employe_id":4,
                "name": "Aditi",
                "Year": 2006,
                "emp-designation": "software Engineer"
            },
            {
                "employe_id":5,
                "name": "Ayush",
                "Year": 2004,
                "emp-designation": "software Engineer"
            }
        ];
        const [searchText,setSearchText] = useState('');
        const [data,setData]= useState(dataList);

        const handleChange = value =>
        {
            setSearchText(value);
            filterData(value);
        }
        const filterData = value =>
        {
            const lowerCaseValue = value.toLowerCase().trim();
            if (!lowerCaseValue)
            {
                setData (dataList);
            }
            else {
                const filterData = dataList.filter(item =>
                    {
                        return Object.keys(item).some(keys =>
                            {
                                return item [key].toString().toLowerCase().includes(lowerCaseValue);

                            })
                    });
                setData(filterData);
                    
                }
            }
        }
        return (
            <div className="App">
                search: <input />
                type = "text"
                placeholder = "type here to search..."
                value = {searchText}
                onChange = {e => handleChange(e.target.value)}
                 
                <div className="Box-container">
                    {
                        dataList.map ((d,i) =>
                        {
                            return <div className = "box" key = {i}>
                                <b>employe_id: </b>{d.employe_id}<br />
                                <b>name: </b>{d.name}<br />
                                <b>year: </b>{d.year}<br />
                                <b>employe_designation: </b>{d.employe_designation}<br />


                    </div>
                        })}
                        <div className = "clearboth"></div>
                        data.length === 0 && <span>NO records found!!!</span>
                        </div>
                        </div>
        );
            
    }
    export default App;