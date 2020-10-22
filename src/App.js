import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { history } from './redux/store';
import Graphs from './pages/Graphs';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import TransactionList from './pages/TransactionList';
import WaterTransactions from './pages/WaterTransactions';
import AirtimeTransactions from './pages/AirtimeTransactions';
import DataTransactions from './pages/DataTransactions';
import TvTransactions from './pages/TvTransactions';
import MatatuTransactions from './pages/MatatuTransactions';
import MerchantTransactions from './pages/MerchantTransactions';
import AgentTransactions from './pages/AgentTransactions';
import CustomerWithdrawals from './pages/CustomerWithdrawals';
import CustomerMMWithdrawals from './pages/CustomerMMWithdrawals';
import CustomerAgentWithdrawals from './pages/CustomerAgentWithdrawals';
import MerchantWithdrawals from './pages/MerchantWithdrawals';
import MerchantMMWithdrawals from './pages/MerchantMMWithdrawals';
import MerchantAgentWithdrawals from './pages/MerchantAgentWithdrawals';
import AgentBankWithdrawals from './pages/AgentBankWithdrawals';
import AgentMMWithdrawals from './pages/AgentMMWithdrawals';
import AgentAgentWithdrawals from './pages/AgentAgentWithdrawals';

function App() {
  return (
    <div className="">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/go-transactions" component={Transactions} />
          <Route exact path="/graphs" component={Graphs} />
          <Route exact path="/transaction-list" component={TransactionList} />
          <Route
            exact
            path="/nwsc-transactions"
            component={WaterTransactions}
          />
          <Route
            exact
            path="/airtime-transactions"
            component={AirtimeTransactions}
          />
          <Route exact path="/data-transactions" component={DataTransactions} />
          <Route exact path="/tv-transactions" component={TvTransactions} />
          <Route
            exact
            path="/matatu-transactions"
            component={MatatuTransactions}
          />
          <Route
            exact
            path="/merchant-transactions"
            component={MerchantTransactions}
          />
          <Route
            exact
            path="/agent-transactions"
            component={AgentTransactions}
          />
          <Route
            exact
            path="/customer-withdrawals"
            component={CustomerWithdrawals}
          />
          <Route
            exact
            path="/customer-mm-withdrawals"
            component={CustomerMMWithdrawals}
          />
          <Route
            exact
            path="/customer-agent-withdrawals"
            component={CustomerAgentWithdrawals}
          />
          <Route
            exact
            path="/merchant-bank-withdrawals"
            component={MerchantWithdrawals}
          />
          <Route
            exact
            path="/merchant-mm-withdrawals"
            component={MerchantMMWithdrawals}
          />
          <Route
            exact
            path="/merchant-agent-withdrawals"
            component={MerchantAgentWithdrawals}
          />
          <Route
            exact
            path="/agent-bank-withdrawals"
            component={AgentBankWithdrawals}
          />
          <Route
            exact
            path="/agent-mm-withdrawals"
            component={AgentMMWithdrawals}
          />
          <Route
            exact
            path="/agent-agent-withdrawals"
            component={AgentAgentWithdrawals}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
