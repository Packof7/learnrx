import * as React from "react";
import styles from "./PackClient.module.scss";
import { IPackClientProps } from "./IPackClientProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Text, PrimaryButton, CompoundButton } from "@fluentui/react";

enum endpoints {
  SLIDESHOW_DATA = "https://httpbin.org/json",
  ENTERPRISE_DATA = "https://httpbin.org/delay/3",
  PERSONAL_DATA = "https://graph.microsoft.com/v1.0/me",
}

enum targetSections {
  NONE,
  CALLBACK_HELL,
  PROMISES,
  ITERATORS,
  AWAIT,
  OBSERVABLES,
}

export default function PackClient(props: IPackClientProps) {
  const [responseText, setResponseText] = React.useState("");
  const [duration, setDuration] = React.useState(0);
  const [startTime, setStartTime] = React.useState(+new Date());
  const [targetSection, setTargetSection] = React.useState(targetSections.NONE);

  const startExecution = (section: targetSections) => {
    setTargetSection(section);
    setResponseText("");
    setDuration(0);
    setStartTime(+new Date());
  };
  const addResponseText = (text: string) => {
    const intermediateTime = +new Date();

    setStartTime((oldStartTime) => {
      setResponseText(
        (oldResponseText) =>
          `${text}, // ${
            (intermediateTime - oldStartTime) / 1000
          }s\n${oldResponseText}`
      );
      return oldStartTime;
    });
  };

  React.useEffect(() => {
    if (responseText === "") {
      return;
    }
    const endTime = +new Date();
    setDuration((endTime - startTime) / 1000);
  }, [responseText]);

  return (
    <div className={styles.packClient}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <Text variant="xLargePlus" as="h1" block>
              Welcome to SharePoint! This is React.
            </Text>
            <Text as="p" block>
              Customize SharePoint experiences using Web Parts.
            </Text>
            <Text as="p" block>
              {escape(props.description)}
            </Text>
            <PrimaryButton href="https://aka.ms/spfx">Learn more</PrimaryButton>
            <Text as="p" block>
              Let's get started 🚀
            </Text>
            <Text block as="h3" variant="xxLargePlus">
              1. Callback Functions
            </Text>
            <CompoundButton
              secondaryText="GET items as JSON from the HTTP endpoints."
              onClick={() => {
                const url1 = endpoints.SLIDESHOW_DATA;
                const url2 = endpoints.ENTERPRISE_DATA;
                const url3 = endpoints.PERSONAL_DATA;
                const fetchData = (
                  errorCallback: (reason: any) => void,
                  successCallback: (value: any) => any,
                  uri: RequestInfo,
                  type: string = "json"
                ) => {
                  fetch(uri)
                    .then((res) => {
                      if (type === "json") {
                        res.json().then(successCallback).catch(errorCallback);
                      } else if (type === "blob") {
                        res.blob().then(successCallback).catch(errorCallback);
                      } else if (type === "text") {
                        res.text().then(successCallback).catch(errorCallback);
                      }
                    })
                    .catch(errorCallback);
                };

                startExecution(targetSections.CALLBACK_HELL);
                fetchData(
                  (err: string) => {
                    alert("Something went wrong!\n\nError was: " + err);
                  },
                  (data: any) => {
                    const text = JSON.stringify(data, undefined, 2);
                    addResponseText(text);
                  },
                  url1
                );
                fetchData(
                  (err: string) => {
                    alert("Something went wrong!\n\nError was: " + err);
                  },
                  (data: any) => {
                    const text = JSON.stringify(data, undefined, 2);
                    addResponseText(text);
                  },
                  url2
                );
                fetchData(
                  (err: string) => {
                    alert("Something went wrong!\n\nError was: " + err);
                  },
                  (data: any) => {
                    const text = JSON.stringify(data, undefined, 2);
                    addResponseText(text);
                  },
                  url3
                );
              }}
            >
              Execute using callbacks
            </CompoundButton>
            <Text as="p" block>
              {targetSection === targetSections.CALLBACK_HELL && duration
                ? `Finished in ${duration}s`
                : null}
            </Text>
            <Text as="pre" block>
              {targetSection === targetSections.CALLBACK_HELL && responseText}
            </Text>
            <Text block as="h3" variant="xxLargePlus">
              2. Promises
            </Text>
            <CompoundButton
              secondaryText="GET items as JSON from the HTTP endpoints.              "
              onClick={() => {
                const url1 = endpoints.SLIDESHOW_DATA;
                const url2 = endpoints.ENTERPRISE_DATA;
                const url3 = endpoints.PERSONAL_DATA;

                startExecution(targetSections.PROMISES);
                fetch(url1)
                  .catch((err) => {
                    alert("Something went wrong!\n\nError was: " + err);
                  })
                  .then((response: Response) => {
                    return response.json();
                  })
                  .then((data) => {
                    const text = JSON.stringify(data, undefined, 2);
                    addResponseText(text);
                  });
                fetch(url2)
                  .catch((err) => {
                    alert("Something went wrong!\n\nError was: " + err);
                  })
                  .then((response: Response) => {
                    return response.json();
                  })
                  .then((data) => {
                    const text = JSON.stringify(data, undefined, 2);
                    addResponseText(text);
                  });
                fetch(url3)
                  .catch((err) => {
                    alert("Something went wrong!\n\nError was: " + err);
                  })
                  .then((response: Response) => {
                    return response.json();
                  })
                  .then((data) => {
                    const text = JSON.stringify(data, undefined, 2);
                    addResponseText(text);
                  });
              }}
            >
              Execute using promises
            </CompoundButton>
            <Text as="p" block>
              {targetSection === targetSections.PROMISES && duration
                ? `Finished in ${duration}s`
                : null}
            </Text>
            <Text as="pre" block>
              {targetSection === targetSections.PROMISES && responseText}
            </Text>
            <Text block as="h3" variant="xxLargePlus">
              3. Async/Await
            </Text>
            <CompoundButton
              secondaryText="GET items as JSON from the HTTP endpoints."
              onClick={async () => {
                const url1 = endpoints.SLIDESHOW_DATA;
                const url2 = endpoints.ENTERPRISE_DATA;
                const url3 = endpoints.PERSONAL_DATA;

                startExecution(targetSections.AWAIT);
                try {
                  const p1 = fetch(url1);
                  const p2 = fetch(url2);
                  const p3 = fetch(url3);

                  const response1 = await p1;
                  const data1 = await response1.json();
                  const text1 = JSON.stringify(data1, undefined, 2);
                  addResponseText(text1);
                  const response2 = await p2;
                  const data2 = await response2.json();
                  const text2 = JSON.stringify(data2, undefined, 2);
                  addResponseText(text2);
                  const response3 = await p3;
                  const data3 = await response3.json();
                  const text3 = JSON.stringify(data3, undefined, 2);
                  addResponseText(text3);
                } catch (err) {
                  alert("Something went wrong!\n\nError was: " + err);
                }
              }}
            >
              Execute using async/await
            </CompoundButton>
            <Text as="p" block>
              {targetSection === targetSections.AWAIT && duration
                ? `Finished in ${duration}s`
                : null}
            </Text>
            <Text as="pre" block>
              {targetSection === targetSections.AWAIT && responseText}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
