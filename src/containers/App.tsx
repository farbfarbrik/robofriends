import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { ApplicationState } from '../store/index';
import * as SearchFieldActions from '../store/SearchField/actions';
import * as RequestRobotsActions from '../store/RequestRobots/actions';
import { Robot } from '../robot-model';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [searchResults, setSearchResults] = useState<Robot[]>([]);

  const searchField = useSelector(
    (state: ApplicationState) => state.searchfield.searchField
  );
  const robots = useSelector((state: ApplicationState) => state.robots.robots);
  const isPending = useSelector(
    (state: ApplicationState) => state.robots.isPending
  );

  const dispatch = useDispatch();

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SearchFieldActions.setSearchField(event.target.value));
  };

  useEffect(() => {
    dispatch(RequestRobotsActions.requestRobotsPending());
  }, [dispatch]);

  useEffect(() => {
    let filteredRobots: Robot[] = robots.filter((robot) => {
      return robot.name.toUpperCase().includes(searchField.toUpperCase());
    });
    setSearchResults(filteredRobots);
  }, [searchField, robots]);

  if (isPending) {
    return <h1>Loading!</h1>;
  } else {
    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={searchResults} />
        </Scroll>
      </div>
    );
  }
};

export default App;
