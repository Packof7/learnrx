import * as React from "react";
import styles from "./PackClient.module.scss";
import { IPackClientProps } from "./IPackClientProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class PackClient extends React.Component<IPackClientProps, {}> {
  public render(): React.ReactElement<IPackClientProps> {
    return (
      <div className={styles.packClient}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>
                Welcome to SharePoint! This is React.
              </span>
              <p className={styles.subTitle}>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
              <Separator></Separator>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
