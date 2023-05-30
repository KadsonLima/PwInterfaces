import { Suspense } from 'react'
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from 'react-router-dom'
import { Home , Shop} from './paths'
import { Loading } from '@components/Loading/index'
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'

export const Routes = () => {
  return (
    <ChakraProvider >
    <Suspense fallback={<Loading/>}>
      <Analytics/>
      <RoutesReactRouterDom>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </RoutesReactRouterDom>
    </Suspense>

      </ChakraProvider>
  )
}

//<Route path="/404" element={<GenericNotFound />} />