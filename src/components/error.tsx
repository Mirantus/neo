import React from 'react';

import { ErrorType } from '../types';

const Error = (props: ErrorType) => <div>Ошибка: {props.message || 'нет данных'}</div>;

export default Error;
