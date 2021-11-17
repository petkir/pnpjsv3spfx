import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';

import styles from './ExtentionFieldCustomizer.module.scss';

export interface IExtentionFieldCustomizerProps {
  text: string;
}

const LOG_SOURCE: string = 'ExtentionFieldCustomizer';

export default class ExtentionFieldCustomizer extends React.Component<IExtentionFieldCustomizerProps, {}> {
  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: ExtentionFieldCustomizer mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: ExtentionFieldCustomizer unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.ExtentionFieldCustomizer}>
        { this.props.text }
      </div>
    );
  }
}
