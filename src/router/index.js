import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import WorkBench from '@/components/workbench/WorkBench'
import Coa from '@/components/coa/Coa'
import CargoPallet from '@/components/cargopallet/CargoPallet'
import ShipPallet from '@/components/shippallet/ShipPallet'
import ShippingDate from '@/components/ShippingDate/ShippingDate'
import CargoMatching from '@/components/cargomatching/CargoMatching'
import CargoList from '@/components/cargolist/CargoList'
import BidHistory from '@/components/bidhistory/BidHistory'
import AdminPacket from '@/components/adminpacket/AdminPacket'

import VoyageSettlement from '@/components/voyagesettlement/VoyageSettlement'
import ShipEarnings from '@/components/shipearnings/ShipEarnings'
import IncomeDistribution from '@/components/incomedistribution/IncomeDistribution'
import BenchmarkTce from '@/components/benchmarktce/BenchmarkTce'
import TheRatingReport from '@/components/theratingreport/TheRatingReport'

import EmailConfiguration from '@/components/emailconfiguration/EmailConfiguration'
import CargoEmail from '@/components/cargoemail/CargoEmail'

import ContractData from '@/components/contractdata/ContractData'
import VoyageTce from '@/components/voyagetce/VoyageTce'
import Outcomes from '@/components/outcomes/Outcomes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/workbench',
      name: 'WorkBench',
      component: WorkBench
    },
    {
      path: '/coa',
      name: 'Coa',
      component: Coa
    },
    {
      path: '/cargopallet',
      name: 'CargoPallet',
      component: CargoPallet
    },
    {
      path: '/shippallet',
      name: 'ShipPallet',
      component: ShipPallet
    },
    {
      path: '/shippingdate',
      name: 'ShippingDate',
      component: ShippingDate
    },
    {
      path: '/cargomatching',
      name: 'CargoMatching',
      component: CargoMatching
    },
    {
      path: '/cargolist',
      name: 'CargoList',
      component: CargoList
    },
    {
      path: '/bidhistory',
      name: 'BidHistory',
      component: BidHistory
    },
    {
      path: '/adminpacket',
      name: 'AdminPacket',
      component: AdminPacket
    },



    {
      path: '/voyagesettlement',
      name: 'VoyageSettlement',
      component: VoyageSettlement
    },
    {
      path: '/shipearnings',
      name: 'ShipEarnings',
      component: ShipEarnings
    },
    {
      path: '/incomedistribution',
      name: 'IncomeDistribution',
      component: IncomeDistribution
    },
    {
      path: '/benchmarktce',
      name: 'BenchmarkTce',
      component: BenchmarkTce
    },
    {
      path: '/theratingreport',
      name: 'TheRatingReport',
      component: TheRatingReport
    },



    {
      path: '/emailconfiguration',
      name: 'EmailConfiguration',
      component: EmailConfiguration
    },
    {
      path: '/cargoemail',
      name: 'CargoEmail',
      component: CargoEmail
    },



    {
      path: '/contractdata',
      name: 'ContractData',
      component: ContractData
    },
    {
      path: '/voyagetce',
      name: 'VoyageTce',
      component: VoyageTce
    },
    {
      path: '/outcomes',
      name: 'Outcomes',
      component: Outcomes
    }
  ]
})
