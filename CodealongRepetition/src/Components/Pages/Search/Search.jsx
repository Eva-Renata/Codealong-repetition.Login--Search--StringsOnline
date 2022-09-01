import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//function component
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const { register, handleSubmit } = useForm();

  //function med props
  const getSearchResult = (data) => {
    setKeyword(data.keyword);
  };

  return (
    <>
      <form onSubmit={handleSubmit(getSearchResult)}>
        <label htmlFor="keyword">Søgeord:</label>
        <input
          id="keyword"
          type="text"
          {...register("keyword", { required: true })}
        />
        <button>Søg</button>
      </form>
      {keyword && <SearchResult keyword={keyword} />}
    </>
  );
};

const SearchResult = (props) => {
  //console.log(props.keyword);
  //sætteren smidt ned i dependency, så den renderer igen
  //hvis du ikke gør det, så renderer den bare hele tiden (infinity loop)
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/stringsonline/search/${props.keyword}`
      );
      setSearchData(result.data);
      //console.log(result);
    };
    getData();
  }, [props.keyword, setSearchData]);
  return (
    <>
      <p>
        {/* num_items -> display the number of results */}
        Fandt {searchData.num_items} resultater på ordet <i>{props.keyword}</i>
      </p>
      {/* mapping the found results */}
      {searchData.items &&
        searchData.items.map((item) => {
          return (
            <div key={item.id}>
              {item.id} .{item.name}
            </div>
          );
        })}
    </>
  );
};
export { Search, SearchResult };
