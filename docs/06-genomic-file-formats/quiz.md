---
title: "Quiz: Genomic File Formats"
sidebar_label: Chapter Quiz
description: "Check your understanding of BGZF and indexes, and how to read FASTQ, SAM/BAM/CRAM, VCF, BED and GTF/GFF3 records."
quiz: true
hide_table_of_contents: true
---

Check how well you can read the formats from this chapter, and what makes them fast to search. You can retake the quiz as many times as you like.

<Quiz>

<Question>

Why can a tool jump to the middle of a BGZF file and decompress only what it needs, when it can't do that with a plain gzip file?

<Option>BGZF files are much smaller than gzip files, so the whole file decompresses quickly.</Option>
<Option>BGZF leaves the records uncompressed and compresses only the header.</Option>
<Option correct>BGZF compresses each block on its own, so no block depends on the text before it.</Option>
<Option>A BGZF file lists the position of every record at its start.</Option>

<Explanation>

In gzip, each note points back to earlier text, so reading from the middle means decompressing everything before it. BGZF cuts the text into blocks and compresses each one as a complete small gzip file, so a tool can decompress just one block. The two sizes come out within a few percent of each other, and the map from regions to blocks lives in a separate index file. See [Compression and BGZF](01-compression-and-BGZF.md#bgzf-compressing-in-blocks).

</Explanation>
</Question>

<Question answer={false}>

`tabix` can index any VCF file that is sorted by position, as long as its name ends in `.gz`.

<Explanation>

Gzip and BGZF files both usually end in `.gz`, so the name doesn't tell you which kind a file is; `htsfile` does. A plain gzip file lacks the block layout, and `tabix` refuses it with `the compression ... is not BGZF`. Compress it again with `bgzip` first. See [Compression and BGZF](01-compression-and-BGZF.md#bgzf-compressing-in-blocks).

</Explanation>
</Question>

<Question>

A FASTQ file uses the usual offset of 33. One base has the quality character `I`, which is character code 73. What quality score does it encode?

<Option>Q73</Option>
<Option correct>Q40</Option>
<Option>Q9</Option>
<Option>Q106</Option>

<Explanation>

To read a score, take the character's code and subtract 33: 73 − 33 = 40. Q9 is what you would get with the offset of 64 that some older Illumina pipelines used, which is why you should check the offset of inherited data. See [FASTQ Files](02-FASTQ-files.md#quality-characters).

</Explanation>
</Question>

<Question multiple>

A sequencing core sends a sample's paired-end reads as `sample_R1.fastq.gz` and `sample_R2.fastq.gz`. Which statements are true?

<Option correct>The tenth records in the two files are the two ends of the same fragment, and they share a name.</Option>
<Option>A record's quality line can be shorter than its bases line, because an N has no quality score.</Option>
<Option correct>If one record is missing from `sample_R2.fastq.gz`, every pair after it is mismatched.</Option>
<Option>The files can be sorted by position and indexed, so a tool can look up the reads in one region.</Option>

<Explanation>

Read 1 and Read 2 go into the two files in the same order, and nothing but that order and the shared name ties them together, so one lost record throws off every pair after it. The quality line has one character per base, so it is exactly as long as the bases line. A read has no position until it is mapped, so FASTQ files can't be sorted or indexed by position. See [FASTQ Files](02-FASTQ-files.md#paired-files) and [The Four Lines](02-FASTQ-files.md#the-four-lines).

</Explanation>
</Question>

<Question>

These are the first nine columns of the two reads of one pair in a BAM file:

```text
chr1_9_566_3:0:0_2:0:0_1f27	99	chr1	9	60	150M	=	417	558
chr1_9_566_3:0:0_2:0:0_1f27	147	chr1	417	60	150M	=	9	-558
```

The flag of the second read is 147, which is 1 + 2 + 16 + 128. What does it say about that read?

<Option>It is Read 1, mapped to the forward strand, and its mate didn't map.</Option>
<Option>It is a duplicate and a secondary alignment.</Option>
<Option>It is Read 2, and it didn't map.</Option>
<Option correct>It is Read 2 of a properly paired read, mapped to the reverse strand.</Option>

<Explanation>

1 means one of a pair, 2 that the pair mapped as the aligner expects, 16 the reverse strand and 128 Read 2. The read did map: RNAME is `chr1` and POS is 417, and an unmapped read would have the value 4 in its flag. See [SAM/BAM/CRAM Files](03-BAM-files.md#flags).

</Explanation>
</Question>

<Question answer={true}>

Most CRAM files can only be read if the same reference genome they were compressed against can be found.

<Explanation>

CRAM stores each read as its differences from the reference, and most CRAM files leave the reference out. If HTSlib can't find that reference, for example in a FASTA file given with `-T`, reading fails, so keep the reference alongside your CRAM files. See [SAM/BAM/CRAM Files](03-BAM-files.md#sam-bam-and-cram).

</Explanation>
</Question>

<Question>

Here are some columns of one record from a VCF file with two samples:

```text
CHROM  POS  REF  ALT  FILTER  FORMAT       sample1                sample2
chr1   736  C    A    .       GT:PL:DP:AD  1/1:166,120,0:40:0,40  0/0:0,148,172:50:49,0
```

Which statement is true?

<Option correct>Sample 1 is homozygous for `A`, and sample 2 matches the reference.</Option>
<Option>Sample 1 is heterozygous, and sample 2 carries no alternate allele.</Option>
<Option>The variant passed every filter, because FILTER is `.`.</Option>
<Option>Sample 2 has no genotype, because none of its reads show `A`.</Option>

<Explanation>

GT comes first in each sample's values: `1/1` means both copies carry the first ALT, `A`, and `0/0` means both copies match the reference. A FILTER of `.` means no filters have been applied yet, which is not the same as `PASS`. See [VCF/BCF Files](04-VCF-files.md#genotypes) and [The Columns](04-VCF-files.md#the-columns).

</Explanation>
</Question>

<Question>

`bcftools` reads a regions file named `one.bed` that holds a single tab-separated line, `chr1 736 737`. Which bases of chr1 does this region cover?

<Option>Bases 736 and 737</Option>
<Option>Base 736 only</Option>
<Option correct>Base 737 only</Option>
<Option>Bases 737 and 738</Option>

<Explanation>

BED uses interbase coordinates, which number the gaps between bases, so `736 737` runs from the gap before base 737 to the gap after it: end minus start, one base. Read as in-base, the same numbers would mean bases 736 and 737, and `bcftools` does read them that way if the file name doesn't end in `.bed` or `.bed.gz`. See [BED Files](05-BED-files.md#in-base-and-interbase-coordinates) and [Try It](05-BED-files.md#try-it).

</Explanation>
</Question>

<Question multiple>

Which statements about GTF and GFF3 files are true?

<Option>Start and end are interbase coordinates, as in BED.</Option>
<Option correct>In GFF3, an exon names the `ID` of its transcript as its `Parent`.</Option>
<Option correct>In GTF, every line names the gene and transcript it belongs to, as `gene_id` and `transcript_id`.</Option>
<Option>In GTF, an exon shared by two transcripts is written once, with both transcript IDs.</Option>

<Explanation>

GFF3 links lines into a tree through `ID` and `Parent`, while GTF repeats `gene_id` and `transcript_id` on every line, so a shared exon is written twice; it is GFF3 that can name two parents on one line. Start and end are in-base in both formats, as in SAM and VCF, so a feature's length is end minus start plus 1. See [GTF/GFF3 Files](06-GTF-GFF3-files.md#genes-transcripts-and-exons) and [The Columns](06-GTF-GFF3-files.md#the-columns).

</Explanation>
</Question>

<Question>

On a transcript on the `+` strand, the first `CDS` line of a GTF file runs from 117,480,095 to 117,480,147. What phase does the next `CDS` line have?

<Option>`0`</Option>
<Option correct>`1`</Option>
<Option>`2`</Option>
<Option>`.`</Option>

<Explanation>

The first line holds 117,480,147 − 117,480,095 + 1 = 53 bases: 17 whole codons and 2 bases of an 18th. The next line starts with the one base that finishes that codon, and phase counts the bases at the start of a line that belong to a codon begun earlier, so it is 1. See [GTF/GFF3 Files](06-GTF-GFF3-files.md#phase).

</Explanation>
</Question>

</Quiz>
