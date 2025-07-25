export interface MIM {
  "?xml": string
  "mim:Informatiemodel": MimInformatiemodel
}

export interface MimInformatiemodel {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": string
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:informatiemodeltype": string
  "mim:informatiedomein": string
  "mim:relatiemodelleringtype": string
  "mim:MIMVersie": string
  "mim:MIMTaal": string
  "mim:packages": MimPackages
  "mim-ext:kenmerken": MimExtKenmerken22
}

export interface MimPackages {
  "mim:Domein": MimDomein[]
  "mim:View": MimView
  "mim:Extern": MimExtern[]
}

export interface MimDomein {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": any
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:datatypen"?: MimDatatypen
  "mim:objecttypen"?: MimObjecttypen
  "mim:gegevensgroeptypen"?: MimGegevensgroeptypen
  "mim:keuzen"?: MimKeuzen2
  "mim-ext:kenmerken": MimExtKenmerken16
}

export interface MimDatatypen {
  "mim:PrimitiefDatatype"?: MimPrimitiefDatatype
  "mim:Referentielijst"?: MimReferentielijst
  "mim:GestructureerdDatatype"?: MimGestructureerdDatatype
  "mim:Codelijst"?: MimCodelijst[]
  "mim:Enumeratie"?: MimEnumeratie
}

export interface MimPrimitiefDatatype {
  "mim:supertypen"?: MimSupertypen
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie
  "mim:datumOpname": string
  "mim:patroon": string
  "mim:formeelPatroon": string
  "mim-ext:kenmerken": MimExtKenmerken2
}

export interface MimSupertypen {
  "mim:GeneralisatieDatatypen": MimGeneralisatieDatatypen
}

export interface MimGeneralisatieDatatypen {
  "mim:datumOpname": string
  "mim:supertype": MimSupertype
  "mim-ext:kenmerken": MimExtKenmerken
}

export interface MimSupertype {
  "mim:Datatype": string
}

export interface MimExtKenmerken {
  "mim-ext:Kenmerk": number
}

export interface MimDefinitie {
  "xhtml:body": XhtmlBody
}

export interface XhtmlBody {
  "xhtml:p": string
}

export interface MimExtKenmerken2 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimReferentielijst {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie2
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:locatie": string
  "mim:referentieElementen": MimReferentieElementen
  "mim-ext:kenmerken": MimExtKenmerken4
}

export interface MimDefinitie2 {
  "xhtml:body": XhtmlBody2
}

export interface XhtmlBody2 {
  "xhtml:p": string
}

export interface MimReferentieElementen {
  "mim:ReferentieElement": MimReferentieElement[]
}

export interface MimReferentieElement {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": string
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:type": MimType
  "mim:kardinaliteit": number
  "mim:identificerend": boolean
  "mim-ext:kenmerken": MimExtKenmerken3
}

export interface MimType {
  "mim:Datatype": string
}

export interface MimExtKenmerken3 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimExtKenmerken4 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimGestructureerdDatatype {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie3
  "mim:datumOpname": string
  "mim:dataElementen": MimDataElementen
  "mim-ext:kenmerken": MimExtKenmerken6
}

export interface MimDefinitie3 {
  "xhtml:body": XhtmlBody3
}

export interface XhtmlBody3 {
  "xhtml:p": string
}

export interface MimDataElementen {
  "mim:DataElement": MimDataElement[]
}

export interface MimDataElement {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie4
  "mim:datumOpname": string
  "mim:type": MimType2
  "mim:kardinaliteit": number
  "mim-ext:kenmerken": MimExtKenmerken5
}

export interface MimDefinitie4 {
  "xhtml:body": XhtmlBody4
}

export interface XhtmlBody4 {
  "xhtml:p": string
}

export interface MimType2 {
  "mim:Datatype": string
}

export interface MimExtKenmerken5 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimExtKenmerken6 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimCodelijst {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie5
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:locatie": string
  "mim-ext:kenmerken": MimExtKenmerken7
}

export interface MimDefinitie5 {
  "xhtml:body": XhtmlBody5
}

export interface XhtmlBody5 {
  "xhtml:p": string
}

export interface MimExtKenmerken7 {
  "mim-ext:Kenmerk": number
}

export interface MimEnumeratie {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie6
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:waarden": MimWaarden
  "mim-ext:kenmerken": MimExtKenmerken9
}

export interface MimDefinitie6 {
  "xhtml:body": XhtmlBody6
}

export interface XhtmlBody6 {
  "xhtml:p": string
}

export interface MimWaarden {
  "mim:Waarde": MimWaarde[]
}

export interface MimWaarde {
  "mim:naam": string
  "mim:definitie": MimDefinitie7
  "mim:datumOpname": string
  "mim:code": string
  "mim-ext:kenmerken": MimExtKenmerken8
}

export interface MimDefinitie7 {
  "xhtml:body": XhtmlBody7
}

export interface XhtmlBody7 {
  "xhtml:p": string
}

export interface MimExtKenmerken8 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimExtKenmerken9 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimObjecttypen {
  "mim:Objecttype": MimObjecttype[]
}

export interface MimObjecttype {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": any
  "mim:herkomstDefinitie": string
  "mim:datumOpname": any
  "mim:indicatieAbstractObject": boolean
  "mim:attribuutsoorten"?: MimAttribuutsoorten
  "mim-ext:kenmerken": MimExtKenmerken10
  "mim:relatiesoorten"?: MimRelatiesoorten
  "mim:keuzen"?: MimKeuzen
  "mim:gegevensgroepen"?: MimGegevensgroepen
  "mim:toelichting"?: MimToelichting
  "mim:supertypen"?: MimSupertypen2
  "mim:externeKoppelingen"?: MimExterneKoppelingen
  "mim:populatie"?: string
  "mim:kwaliteit"?: string
}

export interface MimAttribuutsoorten {
  "mim:Attribuutsoort": any
}

export interface MimExtKenmerken10 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimRelatiesoorten {
  "mim:Relatiesoort": any
}

export interface MimKeuzen {
  "mim-ref:KeuzeRef": string
}

export interface MimGegevensgroepen {
  "mim:Gegevensgroep": MimGegevensgroep
}

export interface MimGegevensgroep {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie8
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:indicatieMaterieleHistorie": boolean
  "mim:indicatieFormeleHistorie": boolean
  "mim:kardinaliteit": number
  "mim:authentiek": string
  "mim:gegevensgroeptype": MimGegevensgroeptype
  "mim-ext:kenmerken": MimExtKenmerken11
}

export interface MimDefinitie8 {
  "xhtml:body": XhtmlBody8
}

export interface XhtmlBody8 {
  "xhtml:p": string
}

export interface MimGegevensgroeptype {
  "mim-ref:GegevensgroeptypeRef": string
}

export interface MimExtKenmerken11 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimToelichting {
  "xhtml:body": XhtmlBody9
}

export interface XhtmlBody9 {
  "xhtml:p": string
}

export interface MimSupertypen2 {
  "mim:GeneralisatieObjecttypen": MimGeneralisatieObjecttypen
}

export interface MimGeneralisatieObjecttypen {
  "mim:datumOpname": string
  "mim:supertype": MimSupertype2
  "mim-ext:kenmerken": MimExtKenmerken12
}

export interface MimSupertype2 {
  "mim-ref:ObjecttypeRef": string
}

export interface MimExtKenmerken12 {
  "mim-ext:Kenmerk": number
}

export interface MimExterneKoppelingen {
  "mim:ExterneKoppeling": MimExterneKoppeling
}

export interface MimExterneKoppeling {
  "mim:naam": string
  "mim:datumOpname": string
  "mim:unidirectioneel": boolean
  "mim:aggregatietype": string
  "mim:doel": MimDoel
  "mim-ext:kenmerken": MimExtKenmerken13
}

export interface MimDoel {
  "mim-ref:ObjecttypeRef": string
}

export interface MimExtKenmerken13 {
  "mim-ext:Kenmerk": number[]
}

export interface MimGegevensgroeptypen {
  "mim:Gegevensgroeptype": MimGegevensgroeptype2
}

export interface MimGegevensgroeptype2 {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie9
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:attribuutsoorten": MimAttribuutsoorten2
  "mim-ext:kenmerken": MimExtKenmerken15
}

export interface MimDefinitie9 {
  "xhtml:body": XhtmlBody10
}

export interface XhtmlBody10 {
  "xhtml:p": string
}

export interface MimAttribuutsoorten2 {
  "mim:Attribuutsoort": MimAttribuutsoort[]
}

export interface MimAttribuutsoort {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie10
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:type": MimType3
  "mim:patroon"?: string
  "mim:formeelPatroon"?: string
  "mim:indicatieMaterieleHistorie": boolean
  "mim:indicatieFormeleHistorie": boolean
  "mim:kardinaliteit": any
  "mim:authentiek": string
  "mim:indicatieAfleidbaar": boolean
  "mim:indicatieClassificerend": boolean
  "mim:mogelijkGeenWaarde": boolean
  "mim:identificerend": boolean
  "mim-ext:kenmerken": MimExtKenmerken14
}

export interface MimDefinitie10 {
  "xhtml:body": XhtmlBody11
}

export interface XhtmlBody11 {
  "xhtml:p": string
}

export interface MimType3 {
  "mim:Datatype"?: string
  "mim-ref:KeuzeRef"?: string
}

export interface MimExtKenmerken14 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimExtKenmerken15 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimKeuzen2 {
  "mim:Keuze": any
}

export interface MimExtKenmerken16 {
  "mim-ext:Kenmerk": any[]
}

export interface MimView {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie11
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:locatie": string
  "mim:objecttypen": MimObjecttypen2
  "mim-ext:kenmerken": MimExtKenmerken19
}

export interface MimDefinitie11 {
  "xhtml:body": XhtmlBody12
}

export interface XhtmlBody12 {
  "xhtml:p": XhtmlP
}

export interface XhtmlP {
  "xhtml:strong": string
  "#text": string
}

export interface MimObjecttypen2 {
  "mim:Objecttype": MimObjecttype2
}

export interface MimObjecttype2 {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie12
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:indicatieAbstractObject": boolean
  "mim:attribuutsoorten": MimAttribuutsoorten3
  "mim-ext:kenmerken": MimExtKenmerken18
}

export interface MimDefinitie12 {
  "xhtml:body": XhtmlBody13
}

export interface XhtmlBody13 {
  "xhtml:p": string
}

export interface MimAttribuutsoorten3 {
  "mim:Attribuutsoort": MimAttribuutsoort2[]
}

export interface MimAttribuutsoort2 {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie13
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:type": MimType4
  "mim:indicatieMaterieleHistorie": boolean
  "mim:indicatieFormeleHistorie": boolean
  "mim:kardinaliteit": any
  "mim:authentiek": string
  "mim:indicatieAfleidbaar": boolean
  "mim:indicatieClassificerend": boolean
  "mim:mogelijkGeenWaarde": boolean
  "mim:identificerend": boolean
  "mim-ext:kenmerken": MimExtKenmerken17
}

export interface MimDefinitie13 {
  "xhtml:body": XhtmlBody14
}

export interface XhtmlBody14 {
  "xhtml:p": XhtmlP2
}

export interface XhtmlP2 {
  "xhtml:strong": string
  "#text": string
}

export interface MimType4 {
  "mim:Datatype": string
}

export interface MimExtKenmerken17 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimExtKenmerken18 {
  "mim-ext:Kenmerk": [string, number]
}

export interface MimExtKenmerken19 {
  "mim-ext:Kenmerk": [number, number, number, string]
}

export interface MimExtern {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": string
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:locatie": string
  "mim-ext:constructies"?: MimExtConstructies
  "mim-ext:kenmerken": MimExtKenmerken21
}

export interface MimExtConstructies {
  "mim-ext:Constructie": MimExtConstructie[]
}

export interface MimExtConstructie {
  "mim-ext:constructietype": string
  "mim:naam": string
  "mim-ext:kenmerken": MimExtKenmerken20
}

export interface MimExtKenmerken20 {
  "mim-ext:Kenmerk": string
}

export interface MimExtKenmerken21 {
  "mim-ext:Kenmerk": [any, string]
}

export interface MimExtKenmerken22 {
  "mim-ext:Kenmerk": [
    string,
    string,
    string,
    string,
    number,
    string,
    string,
    string
  ]
}
