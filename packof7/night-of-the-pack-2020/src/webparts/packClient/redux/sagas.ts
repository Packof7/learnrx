import { all } from 'redux-saga/effects';



function* helloSaga() {
  console.log('Hello Sagas!');
}

const mySagas = [
  helloSaga(),
];

function* rootSaga() {
  yield all(mySagas);
}

export { rootSaga };

// takeEvery, takeLatest, takeLeading
