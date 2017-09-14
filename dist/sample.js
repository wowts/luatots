statePrototypeAuraCount = state, auraId, filter, mine, minStacks, atTime, excludeUnitId;
{
    OvaleAuraStartProfiling;
    minStacks = minStacks1;
    count = 0;
    stacks = 0;
    startChangeCount, endingChangeCount = INFINITY, INFINITY;
    startFirst, endingLast = INFINITY, 0;
    var excludeGUID = excludeUnitIdOvaleGUIDUnitGUIDexcludeUnitId;
    guid, auraTablepairsOvaleAuraaura;
    {
        guidexcludeGUIDauraTableauraId;
        {
            mine;
            {
                var aura = GetStateAurastate, guid, auraId, self_playerGUID;
                stateIsActiveAuraaura, atTimeaurafilterfilteraurastacksminStacksaurastate;
                {
                    CountMatchingActiveAurastate, aura;
                }
                petGUIDpairsself_petGUID;
                {
                    aura = GetStateAurastate, guid, auraId, petGUID;
                    stateIsActiveAuraaura, atTimeaurafilterfilteraurastacksminStacksaurastate;
                    {
                        CountMatchingActiveAurastate, aura;
                    }
                }
            }
            {
                casterGUIDpairsauraTableauraId;
                {
                    var aura = GetStateAurastate, guid, auraId, casterGUID;
                    stateIsActiveAuraaura, atTimeaurafilterfilteraurastacksminStacksaurastate;
                    {
                        CountMatchingActiveAurastate, aura;
                    }
                }
            }
        }
    }
    guid, auraTablepairsstateaura;
    {
        guidexcludeGUIDauraTableauraId;
        {
            mine;
            {
                var aura = auraTableauraIdself_playerGUID;
                aura;
                {
                    stateIsActiveAuraaura, atTimeaurafilterfilteraurastacksminStacks;
                    {
                        CountMatchingActiveAurastate, aura;
                    }
                }
                petGUIDpairsself_petGUID;
                {
                    aura = auraTableauraIdpetGUID;
                    stateIsActiveAuraaura, atTimeaurafilterfilteraurastacksminStacksaurastate;
                    {
                        CountMatchingActiveAurastate, aura;
                    }
                }
            }
            {
                casterGUID, aurapairsauraTableauraId;
                {
                    stateIsActiveAuraaura, atTimeaurafilterfilteraurastacksminStacks;
                    {
                        CountMatchingActiveAurastate, aura;
                    }
                }
            }
        }
    }
    stateLog, auraId, count, stacks, startChangeCount, endingChangeCount, startFirst, endingLast;
    OvaleAuraStopProfiling;
    count, stacks, startChangeCount, endingChangeCount, startFirst, endingLast;
}
//# sourceMappingURL=sample.js.map