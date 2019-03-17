import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Item from '../../items/item/';

interface RouterPropsType { id: string; }
interface PropsType extends RouteComponentProps<RouterPropsType> {}

export default (props:PropsType) => <Item id={props.match.params.id} />;
