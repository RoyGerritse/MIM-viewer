export interface MIM {
  "?xml": Xml
  "mim:Informatiemodel": MimInformatiemodel,
  name: string
}

export interface Xml {
  version: string
  encoding: string
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
  "xmlns:cs": string
  "xmlns:dlogger": string
  "xmlns:mim": string
  "xmlns:mim-ext": string
  "xmlns:mim-ref": string
  "xmlns:xhtml": string
  "xmlns:xlink": string
  "xmlns:xs": string
  "xmlns:xsi": string
  "xsi:schemaLocation": string
}

export interface MimPackages {
  "mim:Domein": MimDomein[]
  "mim:View": MimView[]
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
  index: string
  id: string
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
  index: string
  id: string
}

export interface MimSupertypen {
  "mim:GeneralisatieDatatypen": MimGeneralisatieDatatypen
}

export interface MimGeneralisatieDatatypen {
  "mim:datumOpname": string
  "mim:supertype": MimSupertype
  "mim-ext:kenmerken": MimExtKenmerken
  index: string
}

export interface MimSupertype {
  "mim:Datatype": MimDatatype
}

export interface MimDatatype {
  value: string
  index: string
}

export interface MimExtKenmerken {
  "mim-ext:Kenmerk": MimExtKenmerk
}

export interface MimExtKenmerk {
  value: number
  naam: string
}

export interface MimDefinitie {
  "xhtml:body": XhtmlBody
}

export interface XhtmlBody {
  "xhtml:p": string
}

export interface MimExtKenmerken2 {
  "mim-ext:Kenmerk": MimExtKenmerk2[]
}

export interface MimExtKenmerk2 {
  value: any
  naam: string
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
  index: string
  id: string
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
  index: string
}

export interface MimType {
  "mim:Datatype": MimDatatype2
}

export interface MimDatatype2 {
  value: string
  index: string
}

export interface MimExtKenmerken3 {
  "mim-ext:Kenmerk": MimExtKenmerk3[]
}

export interface MimExtKenmerk3 {
  value: any
  naam: string
}

export interface MimExtKenmerken4 {
  "mim-ext:Kenmerk": MimExtKenmerk4[]
}

export interface MimExtKenmerk4 {
  value: any
  naam: string
}

export interface MimGestructureerdDatatype {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie3
  "mim:datumOpname": string
  "mim:dataElementen": MimDataElementen
  "mim-ext:kenmerken": MimExtKenmerken6
  index: string
  id: string
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
  index: string
}

export interface MimDefinitie4 {
  "xhtml:body": XhtmlBody4
}

export interface XhtmlBody4 {
  "xhtml:p": string
}

export interface MimType2 {
  "mim:Datatype": MimDatatype3
}

export interface MimDatatype3 {
  value: string
  index: string
}

export interface MimExtKenmerken5 {
  "mim-ext:Kenmerk": MimExtKenmerk5[]
}

export interface MimExtKenmerk5 {
  value: any
  naam: string
}

export interface MimExtKenmerken6 {
  "mim-ext:Kenmerk": MimExtKenmerk6[]
}

export interface MimExtKenmerk6 {
  value: any
  naam: string
}

export interface MimCodelijst {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie5
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:locatie": string
  "mim-ext:kenmerken": MimExtKenmerken7
  index: string
  id: string
}

export interface MimDefinitie5 {
  "xhtml:body": XhtmlBody5
}

export interface XhtmlBody5 {
  "xhtml:p": string
}

export interface MimExtKenmerken7 {
  "mim-ext:Kenmerk": MimExtKenmerk7
}

export interface MimExtKenmerk7 {
  value: number
  naam: string
}

export interface MimEnumeratie {
  "mim:naam": string
  "mim:herkomst": string
  "mim:definitie": MimDefinitie6
  "mim:herkomstDefinitie": string
  "mim:datumOpname": string
  "mim:waarden": MimWaarden
  "mim-ext:kenmerken": MimExtKenmerken9
  index: string
  id: string
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
  index: string
}

export interface MimDefinitie7 {
  "xhtml:body": XhtmlBody7
}

export interface XhtmlBody7 {
  "xhtml:p": string
}

export interface MimExtKenmerken8 {
  "mim-ext:Kenmerk": MimExtKenmerk8[]
}

export interface MimExtKenmerk8 {
  value: any
  naam: string
}

export interface MimExtKenmerken9 {
  "mim-ext:Kenmerk": MimExtKenmerk9[]
}

export interface MimExtKenmerk9 {
  value: any
  naam: string
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
  index: string
  id: string
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
  "mim-ext:Kenmerk": MimExtKenmerk10[]
}

export interface MimExtKenmerk10 {
  value: any
  naam: string
}

export interface MimRelatiesoorten {
  "mim:Relatiesoort": any
}

export interface MimKeuzen {
  "mim-ref:KeuzeRef": MimRefKeuzeRef
}

export interface MimRefKeuzeRef {
  value: string
  index: string
  label: string
  "xlink:href": string
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
  index: string
}

export interface MimDefinitie8 {
  "xhtml:body": XhtmlBody8
}

export interface XhtmlBody8 {
  "xhtml:p": string
}

export interface MimGegevensgroeptype {
  "mim-ref:GegevensgroeptypeRef": MimRefGegevensgroeptypeRef
}

export interface MimRefGegevensgroeptypeRef {
  value: string
  index: string
  "xlink:href": string
}

export interface MimExtKenmerken11 {
  "mim-ext:Kenmerk": MimExtKenmerk11[]
}

export interface MimExtKenmerk11 {
  value: any
  naam: string
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
  index: string
}

export interface MimSupertype2 {
  "mim-ref:ObjecttypeRef": MimRefObjecttypeRef
}

export interface MimRefObjecttypeRef {
  value: string
  index: string
  "xlink:href": string
}

export interface MimExtKenmerken12 {
  "mim-ext:Kenmerk": MimExtKenmerk12
}

export interface MimExtKenmerk12 {
  value: number
  naam: string
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
  index: string
}

export interface MimDoel {
  "mim-ref:ObjecttypeRef": MimRefObjecttypeRef2
}

export interface MimRefObjecttypeRef2 {
  value: string
  index: string
  "xlink:href": string
}

export interface MimExtKenmerken13 {
  "mim-ext:Kenmerk": MimExtKenmerk13[]
}

export interface MimExtKenmerk13 {
  value: number
  naam: string
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
  index: string
  id: string
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
  index: string
}

export interface MimDefinitie10 {
  "xhtml:body": XhtmlBody11
}

export interface XhtmlBody11 {
  "xhtml:p": string
}

export interface MimType3 {
  "mim:Datatype"?: MimDatatype4
  "mim-ref:KeuzeRef"?: MimRefKeuzeRef2
}

export interface MimDatatype4 {
  value: string
  index: string
}

export interface MimRefKeuzeRef2 {
  value: string
  index: string
  "xlink:href": string
}

export interface MimExtKenmerken14 {
  "mim-ext:Kenmerk": MimExtKenmerk14[]
}

export interface MimExtKenmerk14 {
  value: any
  naam: string
}

export interface MimExtKenmerken15 {
  "mim-ext:Kenmerk": MimExtKenmerk15[]
}

export interface MimExtKenmerk15 {
  value: any
  naam: string
}

export interface MimKeuzen2 {
  "mim:Keuze": any
}

export interface MimExtKenmerken16 {
  "mim-ext:Kenmerk": MimExtKenmerk16[]
}

export interface MimExtKenmerk16 {
  value: any
  naam: string
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
  index: string
  id: string
}

export interface MimDefinitie11 {
  "xhtml:body": XhtmlBody12
}

export interface XhtmlBody12 {
  "xhtml:p": XhtmlP
}

export interface XhtmlP {
  "xhtml:strong": string
  value: string
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
  index: string
  id: string
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
  index: string
}

export interface MimDefinitie13 {
  "xhtml:body": XhtmlBody14
}

export interface XhtmlBody14 {
  "xhtml:p": XhtmlP2
}

export interface XhtmlP2 {
  "xhtml:strong": string
  value: string
}

export interface MimType4 {
  "mim:Datatype": MimDatatype5
}

export interface MimDatatype5 {
  value: string
  index: string
}

export interface MimExtKenmerken17 {
  "mim-ext:Kenmerk": MimExtKenmerk17[]
}

export interface MimExtKenmerk17 {
  value: any
  naam: string
}

export interface MimExtKenmerken18 {
  "mim-ext:Kenmerk": MimExtKenmerk18[]
}

export interface MimExtKenmerk18 {
  value: any
  naam: string
}

export interface MimExtKenmerken19 {
  "mim-ext:Kenmerk": MimExtKenmerk19[]
}

export interface MimExtKenmerk19 {
  value: any
  naam: string
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
  index: string
  id: string
}

export interface MimExtConstructies {
  "mim-ext:Constructie": MimExtConstructie[]
}

export interface MimExtConstructie {
  "mim-ext:constructietype": string
  "mim:naam": string
  "mim-ext:kenmerken": MimExtKenmerken20
  index: string
  id: string
}

export interface MimExtKenmerken20 {
  "mim-ext:Kenmerk": MimExtKenmerk20
}

export interface MimExtKenmerk20 {
  value: string
  naam: string
}

export interface MimExtKenmerken21 {
  "mim-ext:Kenmerk": MimExtKenmerk21[]
}

export interface MimExtKenmerk21 {
  value: any
  naam: string
}

export interface MimExtKenmerken22 {
  "mim-ext:Kenmerk": MimExtKenmerk22[]
}

export interface MimExtKenmerk22 {
  value: any
  naam: string
}
