import { Component } from 'react';
import Loader from 'react-loader-spinner';
import colors from '../../assets/styles/variables/colors.module.css';

const DefaultLoader = () => (
  <Loader type="Oval" color={colors.mainColor} height={100} width={100} />
);

const asyncComponent = ({ loader, loading: Loading = DefaultLoader }) => {
  return class AsyncComponent extends Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const { default: loadedComponent } = await loader();

      this.setState({
        component: loadedComponent,
      });
    }

    render() {
      const { component: LoadedComponent } = this.state;

      return LoadedComponent ? (
        <LoadedComponent {...this.props} />
      ) : (
        <Loading />
      );
    }
  };
};

export default asyncComponent;
