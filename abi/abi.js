const ABI = [
  {
    constant: false,
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    constant: false,
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    constant: false,
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    constant: false,
    inputs: [
      {
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "bufferSafe",
        type: "bool",
      },
    ],
    name: "ReferralRewardBuffered",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        name: "user",
        type: "address",
      },
      {
        name: "rewardType",
        type: "uint8",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardClaimed",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        name: "role",
        type: "bytes32",
      },
      {
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        name: "role",
        type: "bytes32",
      },
      {
        name: "account",
        type: "address",
      },
      {
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        name: "role",
        type: "bytes32",
      },
      {
        name: "account",
        type: "address",
      },
      {
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "claimBuffer",
    outputs: [],
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "claimReward",
    outputs: [],
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "currentEpoch",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "cycleStartTimestamp",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "role",
        type: "bytes32",
      },
      {
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "role",
        type: "bytes32",
      },
      {
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "vcContract",
        type: "address",
      },
      {
        name: "tkn",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "role",
        type: "bytes32",
      },
      {
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "role",
        type: "bytes32",
      },
      {
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "startTimestamp",
        type: "uint256",
      },
    ],
    name: "start",
    outputs: [],
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "stop",
    outputs: [],
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "user",
        type: "address",
      },
    ],
    name: "userBuffer",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "user",
        type: "address",
      },
      {
        name: "epochID",
        type: "uint256",
      },
    ],
    name: "userClaimStatus",
    outputs: [
      {
        name: "buffer",
        type: "uint256",
      },
      {
        name: "claimStatus",
        type: "bool",
      },
    ],
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "user",
        type: "address",
      },
    ],
    name: "userGenesisClaimStatus",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    type: "function",
  },
];
module.exports = { ABI };