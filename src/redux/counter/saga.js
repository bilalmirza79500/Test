import { call, put, takeEvery, select, takeLatest } from 'redux-saga/effects'

import {
  GET_CLIENT,
} from './types'
import { Api } from './api'
import * as Actions from './actions';
// import * as RootNavigation from './../../../RootNavigation';

const getInvoiceNumber = state => state.home?.invoiceNumber;

function* getClient() {
  try {

    const data = yield call(Api.getClients);
    if (data) {
      yield put(Actions.getClientSuccess(data))
    }

  } catch (error) {
    console.log(error);
  }
}


function* counterSaga() {
//   yield takeLatest(GET_CLIENT, getClient);

}


export default counterSaga;