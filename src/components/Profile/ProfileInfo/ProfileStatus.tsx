import React, {ChangeEvent} from 'react';

type StateType = {
    editMode: boolean,
    status: string
}
export type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType, StateType> {

    state: StateType = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value});
    };

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<StateType>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
};
export default ProfileStatus;