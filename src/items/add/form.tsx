import * as React from "react";

import Error from "../../components/error";
import { IItem } from "../../types";
import { IAddErrorStore } from "./reducers/error";

interface IProps {
    formError: IAddErrorStore;
    onSubmit(values: Pick<IItem, "text">): void;
}

export default class ItemsAddForm extends React.Component<IProps> {
    public handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.onSubmit({ text: event.currentTarget.text.value });
    };

    public render() {
        const { formError } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <textarea name="text" />
                <br />
                <button>Добавить</button>
                {formError && <Error {...formError} />}
            </form>
        );
    }
}
