build:
	solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleContract.sol
deploy:
	ts-node deploy.ts