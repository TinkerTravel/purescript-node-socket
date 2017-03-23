module Node.Socket
  ( SOCKET
  , Socket
  , connectTCP
  , asStream
  ) where

import Control.Monad.Aff (Aff)
import Node.Stream (Duplex)

foreign import data SOCKET :: Effect

foreign import data Socket :: Type

foreign import connectTCP
  :: ∀ eff
   . { host :: String
     , port :: Int
     }
  -> Aff (socket :: SOCKET | eff) Socket

foreign import asStream
  :: ∀ eff
   . Socket
  -> Duplex (socket :: SOCKET | eff)
