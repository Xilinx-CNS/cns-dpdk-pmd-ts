# SPDX-License-Identifier: Apache-2.0
# (c) Copyright 2016 - 2022 Xilinx, Inc. All rights reserved.
--conf-cs=cs/dpdk-pmd-ts.yml
--script=scripts/ta-def
--script=scripts/defaults
--tester-script=scripts/dpdk-trc-tags
--tester-script=scripts/os-trc-tags
--script=scripts/net-modules
--script=scripts/iut-net-driver-loaded
--script=scripts/disable_unused_agts
