import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

// const mapStateToProps = (state) => {
//   return {
//     searchField: state.searchRobotsReducer.searchField,
//     robots: state.requestRobotsReducer.robots,
//     isPending: state.requestRobotsReducer.isPending,
//     error: state.requestRobotsReducer.error,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSearchChange: (event) => {
//       return dispatch(setSearchField(event.target.value));
//     },
//     onRequestRobots: () => {
//       return dispatch(requestRobots());
//     },
//   };
// };

const App = ({ store }) => {
  const [searchResults, setSearchResults] = useState([]);
  // const [isPending] = useState();

  const searchField = useSelector(
    (state) => state.searchRobotsReducer.searchField
  );
  const robots = useSelector((state) => state.requestRobotsReducer.robots);
  const isPending = useSelector(
    (state) => state.requestRobotsReducer.isPending
  );

  const dispatch = useDispatch();

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  useEffect(() => {
    let filteredRobots = robots.filter((robot) => {
      return robot.name.toUpperCase().includes(searchField.toUpperCase());
    });
    setSearchResults(filteredRobots);
  }, [searchField, robots]);

  // const newRobot = searchResults;

  // componentDidMount() {
  //   this.props.onRequestRobots();
  // }

  if (isPending) {
    return <h1>Loading!</h1>;
  } else {
    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={searchResults} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
};

export default App;
