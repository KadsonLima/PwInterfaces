import { lazy } from 'react'

export const Home = lazy(() =>
  import('../pages/Home/').then(module => ({
    default: module.Home,
  })),
)

export const Shop = lazy(() =>
  import('../pages/Shop/').then(module => ({
    default: module.Shop,
  })),
)

export const Loading = lazy(() =>
  import('../components/Loading/').then(module => ({
    default: module.Loading,
  })),
)
