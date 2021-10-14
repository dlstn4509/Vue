/**
 * ? vuex의 큰 역활 두가지
 * ! 1. app의 모든 Component 전역변수
 * ! 2. Immutable data 만듬
 */

import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({ state, getters, mutations, actions });
