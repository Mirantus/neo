import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { fetchItems } from './actions';

interface ItemsListActions {
    fetchItems(): void
}

interface Props {
    actions: ItemsListActions
}

class ItemsList extends React.Component<Props> {
    componentDidMount(): void {
        const { actions } = this.props;
        actions.fetchItems();
    }

    render() {
        return <div>List</div>;
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<Props, 'actions'> => ({
    actions: bindActionCreators({ fetchItems }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
