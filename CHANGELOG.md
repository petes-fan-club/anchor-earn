# CHANGELOG

# v1.1.1
> 12 Nov 2021
  Here is the [release](https://github.com/Anchor-Protocol/anchor-earn/commit/673d70bbac7084f87490f71c6ea09cf1fdff7c31)
## Changed:
- Address the [issue](https://github.com/Anchor-Protocol/anchor-earn/issues/10).


## v1.1.0
> 9 Sep 2021
  Here is the [release](https://github.com/Anchor-Protocol/anchor-earn/commit/9ef75fd59fa91a74620b5602c60c1ca663e1b8f8)

## Changed:
- Update `terra.js` version to `@terra-money/terra.js ^2.1.0`
- Changed `testnet` to `bombay-12`
- Changed `mainnet` to `columbus-5`

## v1.0.3, v1.0.4 
> 24 Aug 2021

  Here is the [release](https://github.com/Anchor-Protocol/anchor-earn/commit/c6a016a86f4e10a842c269a0d1bfd4a95ff3bd02) (v1.0.3)
  Here is the [release](https://github.com/Anchor-Protocol/anchor-earn/commit/bffe76c236752dfa3b5ca74bc72408147eb8199e) (v1.0.4)
  
### Changed:
- Update the `gas price`

## v1.0.2
> 16 June 2021
  
  Here is the [release](https://github.com/Anchor-Protocol/anchor-earn/commit/938bd896a5212cbc2023755eee9262e659828858).
### Changed:
- Change `NUMBER_OF_BLOCKS` to `BLOCKS_IN_YEAR`.
- Change `BLOCKS_IN_YEAR` from `4_906_443` to `4_656_810`.
 
## v1.0.1
> 12 May 2021
  
  Here is the [release](https://github.com/Anchor-Protocol/anchor-earn/commit/ff6a7a71d682876f8a8792135ebde1a2876736e9).
### Added:
 - Fix `operationHandler` function to support only `Msg[]`.
  
 
## v1.0.0
> 10 May 2021
  
  First [release](https://github.com/Anchor-Protocol/anchor-earn/commit/f30c8a580e23d07669c9b876078112e7c34ec5c1).
### Features:
 - Supports only the Terra blockchain.   
 - Works with Anchor protocol contracts on both the testnet (Tequila-004) and mainnet (Columbus-4).
 - Supports the `deposit`, `withdraw`, and `send` execution functionalities.
    - Supports `deposit` in the TerraUSD (UST) currency.
    - Supports `withdraw` in both the TerraUSD (UST) and aUST currencies.
    - Supports `send` in both the TerraUSD (UST) and aUST currencies.
    
 - Supports `market` and user `balance` queries.
 - Supports `customSigner`, `customBroadcaster`, and `loggable`.