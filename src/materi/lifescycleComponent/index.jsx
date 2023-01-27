import React from 'react';
import { Container } from 'react-bootstrap';
import Cards from './components/Cards';
import InputForm from './components/InputForm';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const LifeCycle = () => {
  const [datas, setDatas] = useState([]);

  const [searchText, setSearchText] = useState('');

  const url = 'https://newsapi.org/v2/top-headlines?' + 'country=id&' + 'from=2022-12-30&' + 'sortBy=popularity&' + 'apiKey=4cf9be61c4e440d3b168f3b77cc750b0';

  const searchUrl = `https://newsapi.org/v2/everything?q=${searchText}&searchIn=title&apiKey=4cf9be61c4e440d3b168f3b77cc750b0`;

  const hitApi = async () => {
    const news = await axios.get(url);
    return news.data.articles;
  };

  const searchApi = async () => {
    const searchNews = await axios.get(searchUrl);
    return searchNews.data.articles;
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (searchText.length > 1) {
      searchApi().then((res) => setDatas(res));
    } else {
      hitApi().then((res) => {
        setDatas(res);
      });
    }
  };

  useEffect(() => {
    hitApi().then((res) => {
      setDatas(res);
    });
  }, []);

  return (
    <Container>
      <InputForm searchText={searchText} handleChange={handleChange} />
      <Cards datas={datas} />
    </Container>
  );
};

export default LifeCycle;
