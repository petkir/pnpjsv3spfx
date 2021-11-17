import * as React from 'react';
import styles from './SimpleSample.module.scss';
import { ISimpleSampleProps } from './ISimpleSampleProps';

import { SPFI, SPFx } from '@pnp/sp';
import "@pnp/sp/webs";
export interface ISimpleSampleState {
  title?: string;
}


export default class SimpleSample extends React.Component<ISimpleSampleProps, ISimpleSampleState> {

  constructor(props: ISimpleSampleProps) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.getSPWebData();
  }
  public render(): React.ReactElement<ISimpleSampleProps> {
    return (
      <div className={styles.simpleSample}>
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

  private async getSPWebData(): Promise<void> {
    const pnpsp = new SPFI().using(SPFx(this.props.context));
    const web = await pnpsp.web();
    this.setState({ title: web.Title })
  }
  

}
