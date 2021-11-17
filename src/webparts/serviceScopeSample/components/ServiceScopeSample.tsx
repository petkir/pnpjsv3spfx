import * as React from 'react';
import styles from './ServiceScopeSample.module.scss';
import { IServiceScopeSampleProps } from './IServiceScopeSampleProps';

import { CustomSPService, ICustomSPService } from './CustomSPService';

export interface IServiceScopeSampleState {
  title?: string;
}

export default class ServiceScopeSample extends React.Component<IServiceScopeSampleProps, IServiceScopeSampleState> {

  constructor(props: IServiceScopeSampleProps) {
    super(props);
    this.state = {}
  }
  componentDidMount() {

    const _customSPServiceInstance: ICustomSPService = this.props.context.serviceScope.consume(CustomSPService.serviceKey);
    _customSPServiceInstance.getWebTitle().then((title: string) => {
      this.setState({ title: title });
    });
  }
  public render(): React.ReactElement<IServiceScopeSampleProps> {
    return (
      <div className={styles.serviceScopeSample}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>{this.state.title}</span>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
