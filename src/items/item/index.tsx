import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { fetchItem } from './actions';
import Error from '../../components/error';
import Loader from '../../components/loader';
import Content from './content';
import { Type as StoreType } from '../../store/reducers';
import { Type as StoreItemType } from './reducers/';

interface ActionsType {
    fetchItem(id: string): void
}

interface PropsType {
    actions: ActionsType
    data: StoreItemType['data'],
    error: StoreItemType['error'],
    id: string,
    isFetching: StoreItemType['isFetching'],
}

class Item extends React.Component<PropsType> {
    componentDidMount(): void {
        const { id, actions } = this.props;

        actions.fetchItem(id);
    }

    render() {
        const { data, isFetching, error } = this.props;

        if (isFetching) {
            return <Loader />;
        }

        if (error) {
            return <Error message={error.message} />;
        }

        if (data) {
            return (
                <Content data={data}/>
            );
        }

        return null;
    }
}

const mapStateToProps = (store: StoreType) => ({
    error: store.items.item.error,
    isFetching: store.items.item.isFetching,
    data: store.items.item.data,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<PropsType, 'actions'> => ({
    actions: bindActionCreators({ fetchItem }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
