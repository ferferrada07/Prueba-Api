import React from 'react'
const {useState, useEffect, useMemo} = React;
import { Container, FormControl, InputGroup, Table, Form } from 'react-bootstrap';


const MiApi = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] =useState('');
  const [sortType, setSortType] = useState('default');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = await response.json();
        setPokemonData(data.results);
      } catch (error) {
        console.error('Error fetching data from PokeAPI', error);
      }
    };

    fetchData();
  }, []);

  const sortedData = useMemo(() => {
    let result = [...pokemonData];

    if (sortType === 'descending') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortType === 'ascending') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [pokemonData, sortType]);

  return (
    <Form>
    <div>
    <h1>Lista de Pokemones</h1>
    <Container>
      <Form class="form-inline my-2 my-lg-0">
        <InputGroup>
          <FormControl
            onChange={(e)=> setSearch(e.target.value)} 
            placeholder="Busca un Pokemon" 
          />
        </InputGroup>           
      </Form>
    </Container>
    <Table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name <br />
          <select defaultValue="default" onChange={(e) => setSortType(e.target.value)}>
            <option disabled value="default">
              Sort by
            </option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
          </th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {sortedData
        .filter((pokemon) => {
          if (search.trim() === '') return true;
          const searchLower = search.toLowerCase();
          for (const key in pokemon) {
            if (pokemon[key].toString().toLowerCase().includes(searchLower)) {
            return true;
            }
          }
          return false;
            })
        .map((pokemon, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{pokemon.name}</td>
            <td><a href={pokemon.url} className="btn btn-primary">VER API</a></td>
          </tr>
        ))}
      </tbody>
      </Table>
    </div>
    </Form>
  );
};

export default MiApi