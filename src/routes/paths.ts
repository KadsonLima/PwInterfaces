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

export const ProductPage = lazy(() =>
  import('../pages/ProductPage/').then(module => ({
    default: module.ProductPage,
  })),
)

export const Loading = lazy(() =>
  import('../components/Loading/').then(module => ({
    default: module.Loading,
  })),
)
