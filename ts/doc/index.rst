..
   SPDX-License-Identifier: Apache-2.0
   (c) Copyright 2016 - 2022 Xilinx, Inc. All rights reserved.

.. toctree::
   :hidden:

   generated/rst/group_dpdk_pmd.rst
   generated/rst/group_dpdk_pmd_params.rst
   dox_resources/terminology.rst
   dox_resources/refs.rst
   dox_resources/internal.rst

DPDK Poll-Mode Driver Test Suite Documentation
==============================================

.. contents:: Table of Contents

@section copyright_notice Copyright Notice

(c) Copyright 2016 - 2022 Xilinx, Inc. All rights reserved.

------------
Introduction
------------

DPDK Poll-Mode Driver Test Suite is aimed to check certain implementation of
the DPDK poll-mode driver. It uses @te_ref te as it's engine.

See :ref:`Abbreviations<term_abbrev>`

----------
References
----------

Find list of documentation mentioned on the
:ref:`References page<refs_details>`

-----------
Conventions
-----------

Parameters of tests are referred in the text using bold italic (for example,
**pco_iut**).

Names of formal arguments of DPDK RTE API functions appear in italic (for
example, *addrlen*).

Standard defines, elements of enumerations as well as **errno** values
appear in monotype font (for example, `AF_INET`, `ENOMEM`).

-------
Testbed
-------

The following setup is required to run the test suite. In theory, Test Engine
may run on either Test machine or Auxiliary test machine.

.. image:: dox_resources/images/testbed.png
  :alt: Testbed Topology

---------------
Test parameters
---------------

The test suite uses extensive parametrization. Details of the XML syntax and
how to read the XML that describes the parameters can be found in TE Tester
documentation.

****************************
Parameter naming conventions
****************************

.. list-table::
  :header-rows: 1

  *
    - Name
    - Description
  *
    - iut_rpcs
    - DPDK-app RPC server on IUT
  *
    - iut_pci_fn
    - NIC PCI function on the IUT
  *
    - iut_mac
    - MAC address of the **iut_pci_fn** NIC
  *
    - iut_addr
    - IPv4/6 unicast address allocated for IUT interface
  *
    - tst_rpcs
    - RPC server on TST
  *
    - tst_if
    - Network interface on TST connected to the **iut_pci_fn** NIC
  *
    - tst_mac
    - MAC address of the **tst_if**
  *
    - tst_addr
    - IPv4/6 unicast address assigned to the **tst_if**
  *
    - other_mac
    - Other unicast MAC address


--------------------
Test Suite Structure
--------------------

* :ref:`Filters <doxid-group__filters>`
* :ref:`Performance <doxid-group__perf>`
* :ref:`Representors <doxid-group__representors>`
* :ref:`Reliability in Normal Use <doxid-group__usecases>`
* :ref:`Transmit Functionality <doxid-group__xmit>`

********
TRC Tags
********

List of TRC tags can be found on the
:ref:`corresponding page<tags_details>`

Details on what TRC is can be found in
TE Documentation
