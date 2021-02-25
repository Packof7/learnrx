import * as strings from 'PackClientWebPartStrings';
import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import { IPackClientProps } from './components/IPackClientProps';
import App from './components/PackClient';

export interface IPackClientWebPartProps {
  description: string;
}

export default class PackClientWebPart extends BaseClientSideWebPart<IPackClientWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPackClientProps > = React.createElement(
      App,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
