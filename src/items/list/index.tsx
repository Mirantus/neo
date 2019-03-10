import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { fetchItems } from './actions';
import Error from '../../components/error';
import Loader from '../../components/loader';
import List from './list';
import { Type as StoreType } from '../../store/reducers';
import { Type as StoreListType } from './reducers/';

interface ActionsType {
    fetchItems(): void
}

interface PropsType {
    actions: ActionsType
    data: StoreListType['data'],
    error: StoreListType['error'],
    isFetching: StoreListType['isFetching'],
}

class ItemsList extends React.Component<PropsType> {
    componentDidMount(): void {
        const { actions } = this.props;

        actions.fetchItems();
    }

    render() {
        const { data, isFetching, error } = this.props;

        if (isFetching) {
            return <Loader />;
        }

        if (error) {
            return <Error message={error.message} />;
        }

        return (
            <List data={data}/>
        );
    }
}

const mapStateToProps = (store: StoreType) => ({
    error: store.items.list.error,
    isFetching: store.items.list.isFetching,
    data: store.items.list.data,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<PropsType, 'actions'> => ({
    actions: bindActionCreators({ fetchItems }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
